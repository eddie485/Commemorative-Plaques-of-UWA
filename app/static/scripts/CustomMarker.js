// extend mapboxGL class so we can edit the click function
    class CustomMarker extends mapboxgl.Marker {
      // new method onClick, sets _handleClick to a function you pass in
      onClick(handleClick) {
        this._handleClick = handleClick;
        return this;
      }

      // the existing _onMapClick was there to trigger a popup
      // but we are hijacking it to run a function we define
      _onMapClick(e) {
        const targetElement = e.originalEvent.target;
        const element = this._element;

        if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
          this._handleClick();
        }
      }
    };
