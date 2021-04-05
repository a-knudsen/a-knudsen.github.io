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
            title: 'Urban Garden Resources of Worcester (UGROW)',
            image: './path/to/image/source.png',
            description: 'UGROW began in 1995 with 1 garden and 1 volunteer gardener with a vision to grow food in the city. Today, the network has grown to include over 60 community gardens throughout the city of Worcester involving more than 500 volunteer gardeners. Network gardens include neighborhood based gardens, school gardens and urban farms. UGROW poses an alternative to fossil-fueled, corporate agriculture and strengthens and beautifies our neighborhoods through promoting and supporting urban gardening.',
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
                  opacity: 1,
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
