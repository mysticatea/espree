module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "foo",
                        "range": [
                            4,
                            7
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 7
                            }
                        }
                    },
                    "init": null,
                    "range": [
                        4,
                        7
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 7
                        }
                    }
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "get",
                        "range": [
                            13,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 7
                            }
                        }
                    },
                    "init": null,
                    "range": [
                        13,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 2,
                            "column": 7
                        }
                    }
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "set",
                        "range": [
                            22,
                            25
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 7
                            }
                        }
                    },
                    "init": null,
                    "range": [
                        22,
                        25
                    ],
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 4
                        },
                        "end": {
                            "line": 3,
                            "column": 7
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                26
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 8
                }
            }
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "x",
                        "range": [
                            32,
                            33
                        ],
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 4
                            },
                            "end": {
                                "line": 5,
                                "column": 5
                            }
                        }
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "properties": [
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        42,
                                        45
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        42,
                                        45
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 7
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "range": [
                                    42,
                                    45
                                ],
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 7
                                    }
                                }
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "get",
                                    "range": [
                                        51,
                                        54
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 7,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 7,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "Identifier",
                                    "name": "get",
                                    "range": [
                                        51,
                                        54
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 7,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 7,
                                            "column": 7
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "range": [
                                    51,
                                    54
                                ],
                                "loc": {
                                    "start": {
                                        "line": 7,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 7
                                    }
                                }
                            },
                            {
                                "type": "ExperimentalSpreadProperty",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "set",
                                    "range": [
                                        63,
                                        66
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 8,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 8,
                                            "column": 10
                                        }
                                    }
                                },
                                "range": [
                                    60,
                                    66
                                ],
                                "loc": {
                                    "start": {
                                        "line": 8,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 8,
                                        "column": 10
                                    }
                                }
                            }
                        ],
                        "range": [
                            36,
                            68
                        ],
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 8
                            },
                            "end": {
                                "line": 9,
                                "column": 1
                            }
                        }
                    },
                    "range": [
                        32,
                        68
                    ],
                    "loc": {
                        "start": {
                            "line": 5,
                            "column": 4
                        },
                        "end": {
                            "line": 9,
                            "column": 1
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                28,
                69
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 9,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        69
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 9,
            "column": 2
        }
    }
};