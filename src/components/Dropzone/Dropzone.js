import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';
import Text from '../Text/Text';
import './Dropzone.css';


function renderInner(state) {
  if (state.dragover) {
    return (
      <div>
        <FontAwesomeIcon className="kit-dropzone__icon--positive" icon={faCloudUploadAlt} size="3x" />
        <Text className="kit-dropzone__text" element="span" size="body" color="positive">
          Drop file to upload
        </Text>
      </div>
    );
  } else if (state.error) {
    return (
      <div>
        <FontAwesomeIcon icon={faCloudUploadAlt} className="kit-dropzone__icon--negative" size="3x" />
        <Text className="kit-dropzone__text" element="span" size="body" color="negative">
          Error: You selected multiple files. Upload another file.
        </Text>
      </div>
    );
  }
  return (
    <div>
      <FontAwesomeIcon icon={faCloudUploadAlt} className="kit-dropzone__icon--main" size="3x" />
      <Text className="kit-dropzone__text" element="span" size="body" color="ink-light">
        Drop and drop to upload or <span className="kit-dropzone__text-link">Browse file</span>
      </Text>
    </div>
  );
}


const propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
};


const defaultProps = {
  name: undefined,
  onChange: undefined,
  multiple: false,
};

export class Dropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragover: false,
      error: false,
    };
  }

  selectFile = (event) => {
    this.input.click(event);
    this.setState({ error: false });
  };

  handleDragOver = (event) => {
    if ('preventDefault' in event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const isDragover = event.type === 'dragover';
    this.setState({ dragover: isDragover, error: false });
  };

  handleFileSelect = (event) => {
    this.handleDragOver(event);
    if (this.props.onChange === null) { return; }
    const files = event.target.files || event.dataTransfer.files;

    if (files.length > 1 && !this.props.multiple) {
      this.setState({ error: true });
      return;
    }
    const fileList = Object.keys(files).map(file => files[file]);
    this.props.onChange({ name: this.props.name, value: fileList });
  };

  render() {
    const dropzoneClassName = classNames(
      {
        'kit-dropzone--dragover': this.state.dragover,
        'kit-dropzone--error': this.state.error,
      },
      'kit-dropzone__container',
    );

    return (
      <div
        className={dropzoneClassName}
      >
        <div
          className="kit-dropzone__inner"
          onClick={this.selectFile}
          onDrop={this.handleFileSelect}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragOver}
          role="button"
          onKeyPress={() => {}}
          tabIndex="-1"
        >
          <div>
            {renderInner(this.state)}
            <input
              ref={(ref) => { this.input = ref; }}
              type="file"
              name={this.props.name}
              multiple={this.props.multiple}
              onChange={this.handleFileSelect}
              className="kit-dropzone__file-input"
            />
          </div>
        </div>
      </div>
    );
  }
}


Dropzone.propTypes = propTypes;
Dropzone.defaultProps = defaultProps;


export default Dropzone;
