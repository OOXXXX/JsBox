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
            $device.taptic(3);
            $safari.open({
              url: "https://www.patrickzhu.club",
              entersReader: true,
              height: 360,
              handler: function() {
            
              }
            })
          }
        }
      }
    ]
})  