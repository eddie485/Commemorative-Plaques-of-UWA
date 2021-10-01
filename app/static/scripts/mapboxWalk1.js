




map.on('styledata', function () {
    // Triggered when `setStyle` is called.
    map.addSource('music', {
        'type': 'geojson',
        'data': '../static/scripts/music.geojson'
        });
  
    map.addLayer({
        'id': 'music',
        'type': 'line',
        'source': 'music',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'rgba(39,52,139,255)',
            'line-width': 4
        }
    });
    map.addSource('iconic', {
        'type': 'geojson',
        'data': '../static/scripts/iconic.geojson'
    });
  
    map.addLayer({
        'id': 'iconic',
        'type': 'line',
        'source': 'iconic',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#e2b600',
            'line-width': 4
        }
    });
    map.addSource('bilya', {
      'type': 'geojson',
      'data': '../static/scripts/bilya.geojson'
      });
  
      map.addLayer({
          'id': 'bilya',
          'type': 'line',
          'source': 'bilya',
          'layout': {
              'line-join': 'round',
              'line-cap': 'round'
          },
          'paint': {
              'line-color': '#e2b600',
              'line-width': 4
          }
      });
  });
  
  
  