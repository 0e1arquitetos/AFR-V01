var APP_DATA = {
  "scenes": [
    {
      "id": "0-passarela",
      "name": "PASSARELA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -3.040324802896704,
        "pitch": -0.06565736809455558,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.117662287345791,
          "pitch": 0.011871273443050612,
          "rotation": 0,
          "target": "1-praa-alimentao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-praa-alimentao",
      "name": "PRAÇA ALIMENTAÇÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.63287878803483,
        "pitch": 0.09374022165764373,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.5312714421407785,
          "pitch": 0.027080807912858162,
          "rotation": 0,
          "target": "2-estar"
        },
        {
          "yaw": -1.0827145848737079,
          "pitch": 0.024484095193550104,
          "rotation": 0,
          "target": "0-passarela"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.7110672909090265,
        "pitch": 0.1635879835799301,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.4050031732775086,
          "pitch": 0.06237891747950819,
          "rotation": 0,
          "target": "1-praa-alimentao"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AFR - EP V01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
