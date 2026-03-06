var queries = [
  {
    label_en: "Procedures for assault and battery",
    label_fr: "Procédures pour coups et blessures",
    query: {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Procedure"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_resultsOrResultedFrom",
        "o": "Fait",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Fait",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait_hasEventType",
            "o": "EventType",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#EventType",
            "criterias": [
              {
                "label": "coup et blessure",
                "criteria": {
                  "rdfTerm": {
                    "type": "uri",
                    "value": "https://data.archives.haute-garonne.fr/type/facou"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "limit": 1000
}
  },
  {
    label_en: "Places where the facts were investigated by the seneschal of Toulouse",
    label_fr: "Lieux des faits instruits par la sénéchaussée de Toulouse",
    query: {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Lieu"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Lieu",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Lieu_inverse_hasOrHadLocation",
        "o": "Fait",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Lieu",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Fait",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait_inverse_resultsOrResultedFrom",
            "o": "Procedure",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "Procedure",
                "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_hasOrHadSubevent",
                "o": "Instruction",
                "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
                "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
                "criterias": []
              },
              "children": [
                {
                  "line": {
                    "s": "Instruction",
                    "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction_isOrWasPerformedBy",
                    "o": "Juridiction",
                    "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
                    "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction",
                    "criterias": [
                      {
                        "label": "France. Sénéchaussée de Toulouse",
                        "criteria": {
                          "rdfTerm": {
                            "type": "uri",
                            "value": "https://data.archives.haute-garonne.fr/agent/51df72a4-01d7-11f1-bcc0-94e70b70a1ec"
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "limit": 1000
}

  },
  {
    label_en: "Changes in referrals to seigneurial courts over the years",
    label_fr: "Évolution des saisines de juridictions seigneuriales au cours des années",
    query: {
  "distinct": true,
  "variables": [
    {
      "expression": {
        "type": "aggregate",
        "aggregation": "count",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "Procedure"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "Procedure_count"
      }
    },
    {
      "termType": "Variable",
      "value": "DateLiteral"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_hasOrHadSubevent",
        "o": "Instruction",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Instruction",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction_isOrWasPerformedBy",
            "o": "Juridiction",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "Juridiction",
                "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction_hasOrHadLegalStatus",
                "o": "LegalStatus",
                "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction",
                "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#LegalStatus",
                "criterias": [
                  {
                    "label": "justice seigneuriale",
                    "criteria": {
                      "rdfTerm": {
                        "type": "uri",
                        "value": "https://data.archives.haute-garonne.fr/type/jusei"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_hasBeginningDate",
        "o": "Date",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Date",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Date",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Date_normalizedDateValue",
            "o": "DateLiteral",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Date",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#DateLiteral",
            "criterias": []
          }
        }
      ]
    }
  ],
  "limit": 1000
}

  },
  {
    label_en: "Facts that bring women before forestry courts",
    label_fr: "Faits qui amènent des femmes devant des juridictions forestières",
    query: {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Procedure"
    },
    {
      "expression": {
        "type": "aggregate",
        "aggregation": "group_concat",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "Libelle"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "Libelle_group_concat"
      }
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_hasOrHadParticipant",
        "o": "PersonnePhysique",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#PersonnePhysique",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "PersonnePhysique",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#PersonnePhysique_hasOrHadDemographicGroup",
            "o": "DemographicGroup",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#PersonnePhysique",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#DemographicGroup",
            "criterias": [
              {
                "label": "Femme",
                "criteria": {
                  "rdfTerm": {
                    "type": "uri",
                    "value": "https://data.archives.haute-garonne.fr/type/sxfem"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_hasOrHadSubevent",
        "o": "Instruction",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Instruction",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction_isOrWasPerformedBy",
            "o": "Juridiction",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Instruction",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "Juridiction",
                "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction_hasOrHadLegalStatus",
                "o": "LegalStatus",
                "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Juridiction",
                "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#LegalStatus",
                "criterias": [
                  {
                    "label": "eaux et forêts",
                    "criteria": {
                      "rdfTerm": {
                        "type": "uri",
                        "value": "https://data.archives.haute-garonne.fr/type/jueau"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "line": {
        "s": "Procedure",
        "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure_resultsOrResultedFrom",
        "o": "Fait",
        "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Procedure",
        "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
        "criterias": []
      },
      "children": [
        {
          "line": {
            "s": "Fait",
            "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait_hasEventType",
            "o": "EventType",
            "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Fait",
            "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#EventType",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "EventType",
                "p": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#EventType_prefLabel",
                "o": "Libelle",
                "sType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#EventType",
                "oType": "https://data.archives.haute-garonne.fr/modeles/sacsaproces#Libelle",
                "criterias": []
              }
            }
          ]
        }
      ]
    }
  ],
  "limit": 1000
}

]