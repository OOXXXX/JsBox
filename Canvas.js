$ui.render({
    props: {
      navButtons: [
        {
          title: "Title",
           // Optional
          icon: "024", // Or you can use icon name
          symbol: "checkmark.seal", // SF symbols are supported
          handler: function() {
            $ui.alert("Tapped!")
            $device.taptic(4);
          }
        }
      ]
    }
  })
