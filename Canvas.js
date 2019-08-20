$ui.render({
    props: {
      navButtons: [
        {
          title: "Title",
           // Optional
          icon: "024", // Or you can use icon name
          symbol: "checkmark.seal", // SF symbols are supported
          handler: function() {
            $ui.toast("Hey!")
            $device.taptic(4)
            $safari.open({
              url: "https://www.patrickzhu.club",
              entersReader: true,
              height: 360,
              handler: function() {
              }
            })
          }
        }
      ]
    }
  })
