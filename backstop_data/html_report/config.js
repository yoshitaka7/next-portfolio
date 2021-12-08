report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_top_0_document_0_pc.png",
        "test": "../bitmaps_test/20211208-131921/backstop_default_top_0_document_0_pc.png",
        "selector": "document",
        "fileName": "backstop_default_top_0_document_0_pc.png",
        "label": "top",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "pc",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.3080610795454546,
          "misMatchPercentage": "0.31",
          "analysisTime": 74
        },
        "diffImage": "../bitmaps_test/20211208-131921/failed_diff_backstop_default_top_0_document_0_pc.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_blog_0_document_0_pc.png",
        "test": "../bitmaps_test/20211208-131921/backstop_default_blog_0_document_0_pc.png",
        "selector": "document",
        "fileName": "backstop_default_blog_0_document_0_pc.png",
        "label": "blog",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/blog",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "pc",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});