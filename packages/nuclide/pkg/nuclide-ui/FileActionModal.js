"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDialog = openDialog;
exports.closeDialog = closeDialog;

function _UniversalDisposable() {
  const data = _interopRequireDefault(require("../../modules/nuclide-commons/UniversalDisposable"));

  _UniversalDisposable = function () {
    return data;
  };

  return data;
}

function _AtomInput() {
  const data = require("../../modules/nuclide-commons-ui/AtomInput");

  _AtomInput = function () {
    return data;
  };

  return data;
}

function _Checkbox() {
  const data = require("../../modules/nuclide-commons-ui/Checkbox");

  _Checkbox = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _nuclideUri() {
  const data = _interopRequireDefault(require("../../modules/nuclide-commons/nuclideUri"));

  _nuclideUri = function () {
    return data;
  };

  return data;
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

/**
 * Component that displays UI to create a new file.
 */
class FileDialogComponent extends React.Component {
  constructor(props) {
    super(props);

    this._handleDocumentMouseDown = event => {
      const dialog = this._dialog; // If the click did not happen on the dialog or on any of its descendants,
      // the click was elsewhere on the document and should close the modal.

      if (event.target !== dialog && !(0, _nullthrows().default)(dialog).contains(event.target)) {
        this._close();
      }
    };

    this._confirm = () => {
      this.props.onConfirm((0, _nullthrows().default)(this._input).getText(), this.state.options);

      this._close();
    };

    this._close = () => {
      if (!this._isClosed) {
        this._isClosed = true;
        this.props.onClose();
      }
    };

    this._isClosed = false;
    this._disposables = new (_UniversalDisposable().default)();
    const options = {};

    for (const name in this.props.additionalOptions) {
      options[name] = true;
    }

    this.state = {
      options
    };
  }

  componentDidMount() {
    const input = (0, _nullthrows().default)(this._input);

    this._disposables.add(atom.commands.add( // $FlowFixMe
    _reactDom.default.findDOMNode(input), {
      'core:confirm': this._confirm,
      'core:cancel': this._close
    }));

    const path = this.props.initialValue;
    input.focus();

    if (this.props.selectBasename && path != null) {
      const {
        dir,
        name
      } = _nuclideUri().default.parsePath(path);

      const selectionStart = dir ? dir.length + 1 : 0;
      const selectionEnd = selectionStart + name.length;
      input.getTextEditor().setSelectedBufferRange([[0, selectionStart], [0, selectionEnd]]);
    }

    document.addEventListener('mousedown', this._handleDocumentMouseDown);
  }

  componentWillUnmount() {
    this._disposables.dispose();

    document.removeEventListener('mousedown', this._handleDocumentMouseDown);
  }

  render() {
    let labelClassName;

    if (this.props.iconClassName != null) {
      labelClassName = `icon ${this.props.iconClassName}`;
    }

    const checkboxes = [];

    for (const name in this.props.additionalOptions) {
      const message = this.props.additionalOptions[name];
      const checked = this.state.options[name];
      const checkbox = React.createElement(_Checkbox().Checkbox, {
        key: name,
        checked: checked,
        onChange: this._handleAdditionalOptionChanged.bind(this, name),
        label: message
      });
      checkboxes.push(checkbox);
    } // `.tree-view-dialog` is unstyled but is added by Atom's tree-view package[1] and is styled by
    // 3rd-party themes. Add it to make this package's modals styleable the same as Atom's
    // tree-view.
    //
    // [1] https://github.com/atom/tree-view/blob/v0.200.0/lib/dialog.coffee#L7


    return React.createElement("div", {
      className: "tree-view-dialog",
      ref: el => {
        this._dialog = el;
      }
    }, React.createElement("label", {
      className: labelClassName
    }, this.props.message), React.createElement(_AtomInput().AtomInput, {
      initialValue: this.props.initialValue,
      ref: input => {
        this._input = input;
      }
    }), checkboxes);
  }

  _handleAdditionalOptionChanged(name, isChecked) {
    const {
      options
    } = this.state;
    options[name] = isChecked;
    this.setState({
      options
    });
  }

}

FileDialogComponent.defaultProps = {
  additionalOptions: {}
};
let atomPanel;
let dialogComponent;

function openDialog(props) {
  closeDialog();
  const dialogHostElement = document.createElement('div');
  atomPanel = atom.workspace.addModalPanel({
    item: dialogHostElement
  });
  dialogComponent = _reactDom.default.render(React.createElement(FileDialogComponent, props), dialogHostElement);
}

function closeDialog() {
  if (atomPanel != null) {
    if (dialogComponent != null) {
      _reactDom.default.unmountComponentAtNode(atomPanel.getItem());

      dialogComponent = null;
    }

    atomPanel.destroy();
    atomPanel = null;
  }
}