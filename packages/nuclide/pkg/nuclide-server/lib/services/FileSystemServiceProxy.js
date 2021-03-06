"use strict";

module.exports = _client => {
  const remoteModule = {};

  remoteModule.exists = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/exists", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.findNearestAncestorNamed = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/findNearestAncestorNamed", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "fileName",
      type: {
        kind: "string"
      }
    }, {
      name: "pathToDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      });
    });
  };

  remoteModule.findFilesInDirectories = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/findFilesInDirectories", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "searchPaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "fileName",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      });
    }).publish();
  };

  remoteModule.lstat = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/lstat", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "fs.Stats"
      });
    });
  };

  remoteModule.mkdir = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/mkdir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.mkdirp = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/mkdirp", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.chmod = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/chmod", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "mode",
      type: {
        kind: "number"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.newFile = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/newFile", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "filePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.readdir = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/readdir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "DirectoryEntry"
        }
      });
    });
  };

  remoteModule.readdirSorted = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/readdirSorted", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "DirectoryEntry"
        }
      });
    });
  };

  remoteModule.readdirRecursive = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/readdirRecursive", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "root",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "limit",
      type: {
        kind: "nullable",
        type: {
          kind: "number"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "DirectoryEntry"
        }
      });
    });
  };

  remoteModule.realpath = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/realpath", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "NuclideUri"
      });
    });
  };

  remoteModule.resolveRealPath = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/resolveRealPath", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    });
  };

  remoteModule.expandHomeDir = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/expandHomeDir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    });
  };

  remoteModule.rename = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/rename", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sourcePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "destinationPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.move = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/move", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sourcePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "destDir",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.copy = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/copy", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sourcePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "destinationPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.copyDir = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/copyDir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sourcePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "destinationPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.symlink = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("FileSystemService/symlink", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sourcePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "targetPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "type",
      type: {
        kind: "nullable",
        type: {
          kind: "union",
          types: [{
            kind: "string-literal",
            value: "dir"
          }, {
            kind: "string-literal",
            value: "file"
          }, {
            kind: "string-literal",
            value: "junction"
          }]
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.rmdir = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/rmdir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.rmdirAll = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/rmdirAll", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "paths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.stat = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/stat", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "fs.Stats"
      });
    });
  };

  remoteModule.unlink = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/unlink", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.readFile = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/readFile", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "options",
      type: {
        kind: "nullable",
        type: {
          kind: "object",
          fields: [{
            name: "flag",
            type: {
              kind: "string"
            },
            optional: true
          }]
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "Buffer"
      });
    });
  };

  remoteModule.createReadStream = function (arg0, arg1) {
    return _client.callRemoteFunction("FileSystemService/createReadStream", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "options",
      type: {
        kind: "nullable",
        type: {
          kind: "object",
          fields: [{
            name: "flag",
            type: {
              kind: "string"
            },
            optional: true
          }]
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "Buffer"
      });
    }).publish();
  };

  remoteModule.isNfs = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/isNfs", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.isFuse = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/isFuse", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "boolean"
      });
    });
  };

  remoteModule.writeFile = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("FileSystemService/writeFile", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "data",
      type: {
        kind: "string"
      }
    }, {
      name: "options",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "WriteOptions"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.writeFileBuffer = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("FileSystemService/writeFileBuffer", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "data",
      type: {
        kind: "named",
        name: "Buffer"
      }
    }, {
      name: "options",
      type: {
        kind: "nullable",
        type: {
          kind: "object",
          fields: [{
            name: "encoding",
            type: {
              kind: "string"
            },
            optional: true
          }, {
            name: "mode",
            type: {
              kind: "number"
            },
            optional: true
          }, {
            name: "flag",
            type: {
              kind: "string"
            },
            optional: true
          }]
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.getFreeSpace = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/getFreeSpace", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "number"
        }
      });
    });
  };

  remoteModule.tempdir = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/tempdir", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "prefix",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    });
  };

  remoteModule.getNuclideDir = function () {
    return _client.callRemoteFunction("FileSystemService/getNuclideDir", "promise", _client.marshalArguments(Array.from(arguments), [])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "NuclideUri"
      });
    });
  };

  remoteModule.getNuclideLogDir = function () {
    return _client.callRemoteFunction("FileSystemService/getNuclideLogDir", "promise", _client.marshalArguments(Array.from(arguments), [])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "NuclideUri"
      });
    });
  };

  remoteModule.guessRealPath = function (arg0) {
    return _client.callRemoteFunction("FileSystemService/guessRealPath", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "NuclideUri"
      });
    });
  };

  return remoteModule;
};

Object.defineProperty(module.exports, "defs", {
  value: {
    Object: {
      kind: "alias",
      name: "Object",
      location: {
        type: "builtin"
      }
    },
    Date: {
      kind: "alias",
      name: "Date",
      location: {
        type: "builtin"
      }
    },
    RegExp: {
      kind: "alias",
      name: "RegExp",
      location: {
        type: "builtin"
      }
    },
    Buffer: {
      kind: "alias",
      name: "Buffer",
      location: {
        type: "builtin"
      }
    },
    "fs.Stats": {
      kind: "alias",
      name: "fs.Stats",
      location: {
        type: "builtin"
      }
    },
    NuclideUri: {
      kind: "alias",
      name: "NuclideUri",
      location: {
        type: "builtin"
      }
    },
    atom$Point: {
      kind: "alias",
      name: "atom$Point",
      location: {
        type: "builtin"
      }
    },
    atom$Range: {
      kind: "alias",
      name: "atom$Range",
      location: {
        type: "builtin"
      }
    },
    exists: {
      kind: "function",
      name: "exists",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 39
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 39
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    findNearestAncestorNamed: {
      kind: "function",
      name: "findNearestAncestorNamed",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 49
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 49
        },
        kind: "function",
        argumentTypes: [{
          name: "fileName",
          type: {
            kind: "string"
          }
        }, {
          name: "pathToDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }
      }
    },
    findFilesInDirectories: {
      kind: "function",
      name: "findFilesInDirectories",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 61
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 61
        },
        kind: "function",
        argumentTypes: [{
          name: "searchPaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "fileName",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }
      }
    },
    lstat: {
      kind: "function",
      name: "lstat",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 80
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 80
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "fs.Stats"
          }
        }
      }
    },
    mkdir: {
      kind: "function",
      name: "mkdir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 89
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 89
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    mkdirp: {
      kind: "function",
      name: "mkdirp",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 100
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 100
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    chmod: {
      kind: "function",
      name: "chmod",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 107
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 107
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "mode",
          type: {
            kind: "number"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    newFile: {
      kind: "function",
      name: "newFile",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 118
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 118
        },
        kind: "function",
        argumentTypes: [{
          name: "filePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    DirectoryEntry: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FileSystem.js",
        line: 28
      },
      name: "DirectoryEntry",
      definition: {
        kind: "tuple",
        types: [{
          kind: "string"
        }, {
          kind: "boolean"
        }, {
          kind: "boolean"
        }]
      }
    },
    readdir: {
      kind: "function",
      name: "readdir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 131
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 131
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "DirectoryEntry"
            }
          }
        }
      }
    },
    readdirSorted: {
      kind: "function",
      name: "readdirSorted",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 140
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 140
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "DirectoryEntry"
            }
          }
        }
      }
    },
    readdirRecursive: {
      kind: "function",
      name: "readdirRecursive",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 153
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 153
        },
        kind: "function",
        argumentTypes: [{
          name: "root",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "limit",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "DirectoryEntry"
            }
          }
        }
      }
    },
    realpath: {
      kind: "function",
      name: "realpath",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 197
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 197
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    },
    resolveRealPath: {
      kind: "function",
      name: "resolveRealPath",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 205
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 205
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "string"
          }
        }
      }
    },
    expandHomeDir: {
      kind: "function",
      name: "expandHomeDir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 212
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 212
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "string"
          }
        }
      }
    },
    rename: {
      kind: "function",
      name: "rename",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 219
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 219
        },
        kind: "function",
        argumentTypes: [{
          name: "sourcePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "destinationPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    move: {
      kind: "function",
      name: "move",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 229
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 229
        },
        kind: "function",
        argumentTypes: [{
          name: "sourcePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "destDir",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    copy: {
      kind: "function",
      name: "copy",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 245
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 245
        },
        kind: "function",
        argumentTypes: [{
          name: "sourcePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "destinationPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    copyDir: {
      kind: "function",
      name: "copyDir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 267
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 267
        },
        kind: "function",
        argumentTypes: [{
          name: "sourcePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "destinationPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    symlink: {
      kind: "function",
      name: "symlink",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 298
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 298
        },
        kind: "function",
        argumentTypes: [{
          name: "sourcePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "targetPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "type",
          type: {
            kind: "nullable",
            type: {
              kind: "union",
              types: [{
                kind: "string-literal",
                value: "dir"
              }, {
                kind: "string-literal",
                value: "file"
              }, {
                kind: "string-literal",
                value: "junction"
              }]
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    rmdir: {
      kind: "function",
      name: "rmdir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 319
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 319
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    rmdirAll: {
      kind: "function",
      name: "rmdirAll",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 323
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 323
        },
        kind: "function",
        argumentTypes: [{
          name: "paths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    stat: {
      kind: "function",
      name: "stat",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 351
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 351
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "fs.Stats"
          }
        }
      }
    },
    unlink: {
      kind: "function",
      name: "unlink",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 358
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 358
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    readFile: {
      kind: "function",
      name: "readFile",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 374
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 374
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "options",
          type: {
            kind: "nullable",
            type: {
              kind: "object",
              fields: [{
                name: "flag",
                type: {
                  kind: "string"
                },
                optional: true
              }]
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "Buffer"
          }
        }
      }
    },
    createReadStream: {
      kind: "function",
      name: "createReadStream",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 381
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 381
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "options",
          type: {
            kind: "nullable",
            type: {
              kind: "object",
              fields: [{
                name: "flag",
                type: {
                  kind: "string"
                },
                optional: true
              }]
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "Buffer"
          }
        }
      }
    },
    isNfs: {
      kind: "function",
      name: "isNfs",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 391
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 391
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    isFuse: {
      kind: "function",
      name: "isFuse",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 398
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 398
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "boolean"
          }
        }
      }
    },
    WriteOptions: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "FileSystem.js",
        line: 34
      },
      name: "WriteOptions",
      definition: {
        kind: "object",
        fields: [{
          name: "encoding",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "mode",
          type: {
            kind: "number"
          },
          optional: true
        }, {
          name: "flag",
          type: {
            kind: "string"
          },
          optional: true
        }]
      }
    },
    writeFile: {
      kind: "function",
      name: "writeFile",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 410
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 410
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "data",
          type: {
            kind: "string"
          }
        }, {
          name: "options",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "WriteOptions"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    writeFileBuffer: {
      kind: "function",
      name: "writeFileBuffer",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 424
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 424
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "data",
          type: {
            kind: "named",
            name: "Buffer"
          }
        }, {
          name: "options",
          type: {
            kind: "nullable",
            type: {
              kind: "object",
              fields: [{
                name: "encoding",
                type: {
                  kind: "string"
                },
                optional: true
              }, {
                name: "mode",
                type: {
                  kind: "number"
                },
                optional: true
              }, {
                name: "flag",
                type: {
                  kind: "string"
                },
                optional: true
              }]
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    getFreeSpace: {
      kind: "function",
      name: "getFreeSpace",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 432
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 432
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }
      }
    },
    tempdir: {
      kind: "function",
      name: "tempdir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 453
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 453
        },
        kind: "function",
        argumentTypes: [{
          name: "prefix",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "string"
          }
        }
      }
    },
    getNuclideDir: {
      kind: "function",
      name: "getNuclideDir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 457
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 457
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    },
    getNuclideLogDir: {
      kind: "function",
      name: "getNuclideLogDir",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 461
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 461
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    },
    guessRealPath: {
      kind: "function",
      name: "guessRealPath",
      location: {
        type: "source",
        fileName: "FileSystemService.js",
        line: 465
      },
      type: {
        location: {
          type: "source",
          fileName: "FileSystemService.js",
          line: 465
        },
        kind: "function",
        argumentTypes: [{
          name: "path",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    }
  }
});