var config = {
    style: 'mapbox://styles/a-knudsen/ckn548ujk07au17oympomdrxz',
    accessToken: 'pk.eyJ1IjoiYS1rbnVkc2VuIiwiYSI6ImNrbjUwNHcxdTB6djkydXFzYXQ2dGpldGwifQ.h7Q9M54ubAgnBZ2OLCDBTQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'REC Community Garden Network',
    subtitle: 'Explore Regional Environmental Council&#39; garden netowrk in Worcester, MA  ',
    byline: 'By Ahna Knudsen, 2021',
    footer: 'Source: Regional Environmental Council',
    chapters: [
        {
            id: 'id-one',
            alignment: 'left',
            hidden: false,
            title: 'Garden #1',
            image: './path/to/image/source.png',
            description: 'Insert Description here',
            location: {
                center: { lon: -71.80640, lat: 42.25878 },
                zoom: 13.40,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                  layer: 'gardens-new-0o4tb6',
                  opacity: 1
                  duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'gardens-new-0o4tb6',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'other-identifier-two',
            alignment: 'right',
            hidden: false,
            title: 'Garden #2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -71.80640, lat: 42.25878 },
                zoom: 13.40,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gardens-new-0o4tb6',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'gardens-new-0o4tb6',
                    opacity: 1
                 }
            ]
        },
        {
            id: 'other-identifier-three',
            alignment: 'right',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -71.80640, lat: 42.25878 },
                zoom: 13.40,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier-four',
            alignment: 'right',
            hidden: false,
            title: 'Fourth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier-five',
            alignment: 'right',
            hidden: false,
            title: 'Fifth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
