$ui.render({
    views: [
      {
        type: "button",
        props: {
          title: "Button"
        },
        layout: function(make, view) {
          make.center.equalTo(view.super)
          make.width.equalTo(64)
        },
        events: {
          tapped: function(sender) {
            $ui.toast("Tapped")
            $device.taptic(4);
            $app.openBrowser({
                type: 10000,
                url: "https://www.apple.com/cn/"
              })
          }
        }
      }
    ]
})  