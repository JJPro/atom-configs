"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectDebugState = exports.getCanTransferFiles = exports.collectSelectionDebugState = exports.serialize = exports.getFileTreeContextMenuNode = exports.getVcsStatus = exports.getSidebarPath = exports.getFocusEditorOnFileSelection = exports.getUsePreviewTabs = exports.getSidebarTitle = exports.getNodeIsFocused = exports.getNodeIsSelected = exports.getLoading = exports.getNodeByIndex = exports.getFilterFound = exports.isEditedWorkingSetEmpty = exports.getNodeForPath = exports.getRootForPath = exports.getNode = exports.getNearbySelectedNode = exports.getSingleTargetNode = exports.getSingleSelectedNode = exports.getTargetNodes = exports.getFocusedNodes = exports.getNodeInRoots = exports.getSelectedNodes = exports.isEmpty = exports.getRootKeys = exports.getTrackedNode = exports.getOpenFilesWorkingSet = exports.getEditedWorkingSet = exports.isEditingWorkingSet = exports.getWorkingSet = exports.hasCwd = exports.getCwdApi = exports.usePrefixNav = exports.getIsCalculatingChanges = exports.getGeneratedOpenChangedFiles = exports.getFileChanges = exports.getCwdKey = exports.getRepositories = exports.getWorkingSetsStore = exports.getExtraProjectSelectionContent = exports.getFilter = exports.getVersion = exports.getRoots = exports.getOpenFilesExpanded = exports.getUncommittedChangesExpanded = exports.getFoldersExpanded = exports.getConf = exports.getAutoExpandSingleChild = void 0;

function _memoize2() {
  const data = _interopRequireDefault(require("lodash/memoize"));

  _memoize2 = function () {
    return data;
  };

  return data;
}

function _nuclideUri() {
  const data = _interopRequireDefault(require("../../../../modules/nuclide-commons/nuclideUri"));

  _nuclideUri = function () {
    return data;
  };

  return data;
}

function _hgConstants() {
  const data = require("../../../nuclide-hg-rpc/lib/hg-constants");

  _hgConstants = function () {
    return data;
  };

  return data;
}

function _nuclideWorkingSetsCommon() {
  const data = require("../../../nuclide-working-sets-common");

  _nuclideWorkingSetsCommon = function () {
    return data;
  };

  return data;
}

function Immutable() {
  const data = _interopRequireWildcard(require("immutable"));

  Immutable = function () {
    return data;
  };

  return data;
}

function _reselect() {
  const data = require("reselect");

  _reselect = function () {
    return data;
  };

  return data;
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
// Simple selectors. These just read directly from state.
//
//
const getAutoExpandSingleChild = state => state._autoExpandSingleChild;

exports.getAutoExpandSingleChild = getAutoExpandSingleChild;

const getConf = state => state._conf;

exports.getConf = getConf;

const getFoldersExpanded = state => {
  return state._foldersExpanded;
};

exports.getFoldersExpanded = getFoldersExpanded;

const getUncommittedChangesExpanded = state => {
  return state._uncommittedChangesExpanded;
};

exports.getUncommittedChangesExpanded = getUncommittedChangesExpanded;

const getOpenFilesExpanded = state => {
  return state._openFilesExpanded;
};

exports.getOpenFilesExpanded = getOpenFilesExpanded;

const getRoots = state => {
  return state._roots;
};

exports.getRoots = getRoots;

const getVersion = state => state.VERSION;

exports.getVersion = getVersion;

const getFilter = state => state._filter;

exports.getFilter = getFilter;

const getExtraProjectSelectionContent = state => state._extraProjectSelectionContent;

exports.getExtraProjectSelectionContent = getExtraProjectSelectionContent;

const getReorderPreviewStatus = state => state._reorderPreviewStatus;

const getSelectionRange = state => state._selectionRange;

const getTrackedRootKey = state => state._trackedRootKey;

const getTrackedNodeKey = state => state._trackedNodeKey;

const getWorkingSetsStore = state => state._workingSetsStore;

exports.getWorkingSetsStore = getWorkingSetsStore;

const getRepositories = state => state._repositories;

exports.getRepositories = getRepositories;

const getCwdKey = state => state._cwdKey;

exports.getCwdKey = getCwdKey;

const getFileChanges = state => state._fileChanges;

exports.getFileChanges = getFileChanges;

const getGeneratedOpenChangedFiles = state => state._generatedOpenChangedFiles;

exports.getGeneratedOpenChangedFiles = getGeneratedOpenChangedFiles;

const getIsCalculatingChanges = state => state._isCalculatingChanges;

exports.getIsCalculatingChanges = getIsCalculatingChanges;

const usePrefixNav = state => state._usePrefixNav;

exports.usePrefixNav = usePrefixNav;

const getSelectedUris = state => state._selectedUris;

const getFocusedUris = state => state._focusedUris;

const getTargetNodeKeys = state => state._targetNodeKeys;

const getCwdApi = state => state._cwdApi;

exports.getCwdApi = getCwdApi;
const hasCwd = (0, _reselect().createSelector)([getCwdKey], cwdKey => cwdKey != null); //
//
// Conf selectors
//
//

exports.hasCwd = hasCwd;
const getWorkingSet = (0, _reselect().createSelector)([getConf], conf => conf.workingSet);
exports.getWorkingSet = getWorkingSet;
const isEditingWorkingSet = (0, _reselect().createSelector)([getConf], conf => conf.isEditingWorkingSet);
exports.isEditingWorkingSet = isEditingWorkingSet;

const getVcsStatuses = state => state.vcsStatuses;
/**
 * Builds the edited working set from the partially-child-derived .checkedStatus property
 */


const getEditedWorkingSet = (0, _reselect().createSelector)([getConf], conf => conf.editedWorkingSet);
exports.getEditedWorkingSet = getEditedWorkingSet;
const getOpenFilesWorkingSet = (0, _reselect().createSelector)([getConf], conf => conf.openFilesWorkingSet); //
//
// Tree selectors. These tell us about the state of the directory tree.
//
//

exports.getOpenFilesWorkingSet = getOpenFilesWorkingSet;

const getTrackedNode = state => {
  if (state._trackedRootKey == null || state._trackedNodeKey == null) {
    return null;
  }

  return getNode(state, state._trackedRootKey, state._trackedNodeKey);
};

exports.getTrackedNode = getTrackedNode;
const getRootKeys = (0, _reselect().createSelector)([getRoots], roots => roots.valueSeq().toArray().map(root => root.uri));
/**
 * Returns true if the store has no data, i.e. no roots, no children.
 */

exports.getRootKeys = getRootKeys;
const isEmpty = (0, _reselect().createSelector)([getRoots], roots => roots.isEmpty());
exports.isEmpty = isEmpty;
const getSelectedNodes = (0, _reselect().createSelector)([getRoots, getSelectedUris], (roots, selectedUris) => {
  const nodes = [];
  selectedUris.forEach((set, rootUri) => {
    set.forEach(uri => {
      const node = getNodeInRoots(roots, rootUri, uri);

      if (node != null) {
        nodes.push(node);
      }
    });
  });
  return Immutable().List(nodes);
});
exports.getSelectedNodes = getSelectedNodes;

const getNodeInRoots = (roots, rootKey, nodeKey) => {
  const rootNode = roots.get(rootKey);

  if (rootNode == null) {
    return null;
  }

  return rootNode.find(nodeKey);
};

exports.getNodeInRoots = getNodeInRoots;
const getFocusedNodes = (0, _reselect().createSelector)([getRoots, getFocusedUris], (roots, focusedUris) => {
  const nodes = [];
  focusedUris.forEach((set, rootUri) => {
    set.forEach(uri => {
      const node = getNodeInRoots(roots, rootUri, uri);

      if (node != null) {
        nodes.push(node);
      }
    });
  });
  return Immutable().List(nodes);
});
exports.getFocusedNodes = getFocusedNodes;
const getTargetNode = (0, _reselect().createSelector)([getRoots, getTargetNodeKeys], (roots, targetNodeKeys) => {
  if (targetNodeKeys == null) {
    return null;
  }

  return getNodeInRoots(roots, targetNodeKeys.rootKey, targetNodeKeys.nodeKey);
}); // Retrieves target node in an immutable list if it's set, or all selected
// nodes otherwise

const getTargetNodes = (0, _reselect().createSelector)([getRoots, getTargetNode, getSelectedNodes], (roots, targetNode, selectedNodes) => {
  if (targetNode) {
    return Immutable().List([targetNode]);
  }

  return selectedNodes;
});
/**
 * Returns a node if it is the only one selected, or null otherwise
 */

exports.getTargetNodes = getTargetNodes;
const getSingleSelectedNode = (0, _reselect().createSelector)([getSelectedNodes], selectedNodes => {
  if (selectedNodes.isEmpty() || selectedNodes.size > 1) {
    return null;
  }

  return selectedNodes.first();
}); // Retrieves the target node, if it's set, or the first selected node otherwise

exports.getSingleSelectedNode = getSingleSelectedNode;
const getSingleTargetNode = (0, _reselect().createSelector)([getTargetNode, getSingleSelectedNode], (targetNode, singleSelectedNode) => {
  var _targetNode;

  return (_targetNode = targetNode) !== null && _targetNode !== void 0 ? _targetNode : singleSelectedNode;
});
/**
 * Returns the current node if it is shown.
 * Otherwise, returns a nearby node that is shown.
 */

exports.getSingleTargetNode = getSingleTargetNode;

function findShownNode(node) {
  if (node.shouldBeShown) {
    return node;
  }

  let shown = node;

  while (shown != null) {
    const next = shown.findNextShownSibling();

    if (next != null) {
      return next;
    }

    shown = shown.parent;
  }

  shown = node;

  while (shown != null) {
    const next = shown.findPrevShownSibling();

    if (next != null) {
      return next;
    }

    shown = shown.parent;
  }

  return null;
}
/**
 * Returns the current node if it is shown and selected
 * Otherwise, returns a nearby selected node.
 */


const getNearbySelectedNode = (state, node) => {
  const shown = findShownNode(node);

  if (shown == null) {
    return shown;
  }

  if (getNodeIsSelected(state, shown)) {
    return shown;
  }

  let selected = shown;

  while (selected != null && !getNodeIsSelected(state, selected)) {
    selected = selected.findNext();
  }

  if (selected != null) {
    return selected;
  }

  selected = shown;

  while (selected != null && !getNodeIsSelected(state, selected)) {
    selected = selected.findPrevious();
  }

  return selected;
};

exports.getNearbySelectedNode = getNearbySelectedNode;

const getNode = (state, rootKey, nodeKey) => getNodeInRoots(getRoots(state), rootKey, nodeKey);

exports.getNode = getNode;

const getRootForPath = (state, nodeKey) => {
  const rootNode = getRoots(state).find(root => nodeKey.startsWith(root.uri));
  return rootNode || null;
};

exports.getRootForPath = getRootForPath;

const getNodeForPath = (state, uri) => {
  const rootNode = getRootForPath(state, uri);
  return rootNode && rootNode.find(uri);
};

exports.getNodeForPath = getNodeForPath;
const isEditedWorkingSetEmpty = (0, _reselect().createSelector)([getRoots], roots => roots.every(root => root.checkedStatus === 'clear'));
exports.isEditedWorkingSetEmpty = isEditedWorkingSetEmpty;
const getFilterFound = (0, _reselect().createSelector)([getRoots], roots => roots.some(root => root.containsFilterMatches));
exports.getFilterFound = getFilterFound;
const getNodeByIndex = (0, _reselect().createSelector)(getRoots, roots => {
  return (0, _memoize2().default)(index => {
    const firstRoot = roots.find(r => r.shouldBeShown);
    return firstRoot == null ? null : findNodeAtOffset(firstRoot, index - 1);
  });
});
exports.getNodeByIndex = getNodeByIndex;

const getLoading = (state, nodeKey) => state._isLoadingMap.get(nodeKey);

exports.getLoading = getLoading;

const getNodeIsSelected = (state, node) => getSelectedUris(state).get(node.rootUri, Immutable().Set()).has(node.uri);

exports.getNodeIsSelected = getNodeIsSelected;

const getNodeIsFocused = (state, node) => getFocusedUris(state).get(node.rootUri, Immutable().Set()).has(node.uri);

exports.getNodeIsFocused = getNodeIsFocused;
const getSidebarTitle = (0, _reselect().createSelector)([getCwdKey], cwdKey => {
  return cwdKey == null ? 'File Tree' : _nuclideUri().default.basename(cwdKey);
});
exports.getSidebarTitle = getSidebarTitle;

const getUsePreviewTabs = state => {
  return state.usePreviewTabs;
};

exports.getUsePreviewTabs = getUsePreviewTabs;

const getFocusEditorOnFileSelection = state => {
  return state.focusEditorOnFileSelection;
};

exports.getFocusEditorOnFileSelection = getFocusEditorOnFileSelection;
const getSidebarPath = (0, _reselect().createSelector)([getCwdKey], cwdKey => {
  if (cwdKey == null) {
    return 'No Current Working Directory';
  }

  const trimmed = _nuclideUri().default.trimTrailingSeparator(cwdKey);

  const directory = _nuclideUri().default.getPath(trimmed);

  const host = _nuclideUri().default.getHostnameOpt(trimmed);

  if (host == null) {
    return `Current Working Directory: ${directory}`;
  }

  return `Current Working Directory: '${directory}' on '${host}'`;
});
exports.getSidebarPath = getSidebarPath;
const getVcsStatus = (0, _reselect().createSelector)([getVcsStatuses], vcsStatuses => {
  return node => {
    var _statusMap$get;

    const statusMap = vcsStatuses.get(node.rootUri);
    return statusMap == null ? _hgConstants().StatusCodeNumber.CLEAN : (_statusMap$get = statusMap.get(node.uri)) !== null && _statusMap$get !== void 0 ? _statusMap$get : _hgConstants().StatusCodeNumber.CLEAN;
  };
}); // In previous versions, we exposed the FileTreeNodes directly. This was bad as it's really just an
// implementation detail. So, when we wanted to move `vcsStatus` off of the node, we had an issue.
// We now expose a limited API instead to avoid this.

exports.getVcsStatus = getVcsStatus;
const getFileTreeContextMenuNode = (0, _reselect().createSelector)([getVcsStatus], getVcsStatusFromNode => {
  return node => {
    var _node$parent;

    if (node == null) {
      return null;
    }

    return {
      uri: node.uri,
      isContainer: node.isContainer,
      isRoot: node.isRoot,
      isCwd: node.isCwd,
      vcsStatusCode: getVcsStatusFromNode(node),
      repo: node.repo,
      // We don't want to expose the entire tree or allow traversal since then we'd have to
      // materialize every node. This is for supporting a legacy use case.
      parentUri: (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.uri
    };
  };
});
/**
 * Find the node that occurs `offset` after the provided one in the flattened list. `offset` must
 * be a non-negative integer.
 *
 * This function is intentionally implemented with a loop instead of recursion. Previously it was
 * implemented using recursion, which caused the stack size to grow with the number of siblings we
 * had to traverse. That meant we exceeded the max stack size with enough sibling files.
 *
 * TODO: Increasingly we are going to want to move state which affects a node's
 * visibility into the state, so eventually this function will need access to
 * state, which is why we've moved it into the Selectors file.
 */

exports.getFileTreeContextMenuNode = getFileTreeContextMenuNode;

function findNodeAtOffset(node_, offset_) {
  let offset = offset_;
  let node = node_;

  while (offset > 0) {
    if (offset < node.shownChildrenCount // `shownChildrenCount` includes the node itself.
    ) {
        // It's a descendant of this node!
        const firstVisibleChild = node.children.find(c => c.shouldBeShown);

        if (firstVisibleChild == null) {
          return null;
        }

        offset--;
        node = firstVisibleChild;
      } else {
      const nextShownSibling = node.findNextShownSibling();

      if (nextShownSibling == null) {
        return null;
      }

      offset -= node.shownChildrenCount;
      node = nextShownSibling;
    }
  }

  return node;
} //
//
// Serialization and debugging
//
//


const serialize = (0, _reselect().createSelector)([getRootKeys, getVersion, getOpenFilesExpanded, getUncommittedChangesExpanded, getFoldersExpanded], (rootKeys, version, openFilesExpanded, uncommittedChangesExpanded, foldersExpanded) => {
  return {
    version,
    childKeyMap: {},
    expandedKeysByRoot: {},
    rootKeys,
    selectedKeysByRoot: {},
    openFilesExpanded,
    uncommittedChangesExpanded,
    foldersExpanded
  };
});
exports.serialize = serialize;
const collectSelectionDebugState = (0, _reselect().createSelector)([getSelectedNodes, getFocusedNodes], (selectedNodes, focusedNodes) => {
  return {
    _selectedNodes: selectedNodes.toArray().map(node => node.uri),
    _focusedNodes: focusedNodes.toArray().map(node => node.uri)
  };
});
exports.collectSelectionDebugState = collectSelectionDebugState;

const getCanTransferFiles = state => Boolean(state.remoteTransferService); // Note: The Flow types for reselect's `createSelector` only support up to 16
// sub-selectors. Since this selector only gets called when the user reports a
// bug, it does not need to be optimized for multiple consecutive calls on
// similar states. Therefore, we've opted to not use createSelector for this
// selector.


exports.getCanTransferFiles = getCanTransferFiles;

const collectDebugState = state => {
  const conf = getConf(state);
  return {
    currentWorkingRoot: getCwdKey(state),
    openFilesExpanded: getOpenFilesExpanded(state),
    uncommittedChangesExpanded: getUncommittedChangesExpanded(state),
    foldersExpanded: getFoldersExpanded(state),
    reorderPreviewStatus: getReorderPreviewStatus(state),
    _filter: getFilter(state),
    _selectionRange: getSelectionRange(state),
    _targetNodeKeys: getTargetNodeKeys(state),
    _trackedRootKey: getTrackedRootKey(state),
    _trackedNodeKey: getTrackedNodeKey(state),
    _isCalculatingChanges: getIsCalculatingChanges(state),
    usePreviewTabs: getUsePreviewTabs(state),
    focusEditorOnFileSelection: getFocusEditorOnFileSelection(state),
    roots: Array.from(getRoots(state).values()).map(root => root.collectDebugState()),
    _conf: {
      hideIgnoredNames: conf.hideIgnoredNames,
      excludeVcsIgnoredPaths: conf.excludeVcsIgnoredPaths,
      hideVcsIgnoredPaths: conf.hideVcsIgnoredPaths,
      isEditingWorkingSet: conf.isEditingWorkingSet,
      vcsStatuses: getVcsStatuses(state).toObject(),
      workingSet: conf.workingSet.getUris(),
      ignoredPatterns: conf.ignoredPatterns.toArray().map(ignored => ignored.pattern),
      openFilesWorkingSet: conf.openFilesWorkingSet.getUris(),
      editedWorkingSet: conf.editedWorkingSet.getUris()
    },
    selectionManager: collectSelectionDebugState(state)
  };
};

exports.collectDebugState = collectDebugState;