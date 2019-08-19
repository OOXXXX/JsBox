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
            $ui.preview({
              title: "URL",
              url: "https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg"
            });
          }
        }
      ]
    }
  })
