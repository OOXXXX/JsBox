var data = [
  {
    name: "$device",
    page: {
      views: [
        {
          type: "list",
          props: {
            data: ["info", "taptic","location"]
          },
          layout: $layout.fill,
          events: {
            didSelect: function(tableView, indexPath) {
              switch (indexPath.row) {
                case 0:
                  $ui.alert({
                    title: "Info",
                    message: $device.info
                  });
                  break;
                case 1:
                  $device.taptic(0);
                  break;
                case 2:
                    $location.fetch({
                      handler: function(location) {
                        var query = location.lat + "," + location.lng;
                        var url = "https://maps.apple.com/?q=" + query + "&ll=" + query;
                        $share.sheet(url);
                      }
                    });
                    $device.taptic(4)
                default:
                  break;
              }
            }
          }
        }
      ]
    }
  },
  {
    name: "$photo",
    page: {
      views: [
        {
          type: "list",
          props: {
            data: ["shot", "choose"]
          },
          layout: $layout.fill,
          events: {
            didSelect: function(tableView, indexPath) {
              switch (indexPath.row) {
                case 0:
                  $photo.take({
                    handler: function(resp) {
                      var image = resp.image
                    }
                  })
                  break;
                case 1:
                  $photo.pick({
                    handler: function(resp) {
                      var image = resp.image
                    }
                  })
                  
                default:
                  break;
              }
            }
          }
        }
      ]
    }
  }
]

data.forEach(function(item) {
  item.page.props = {
    title: item.name
  };
});

// Prepare view
$ui.render({
  props: {
    title: "API Samples"
  },
  views: [
    {
      type: "list",
      props: {
        id: "main-list"
      },
      layout: $layout.fill,
      events: {
        didSelect: function(tableView, indexPath) {
          $ui.push(data[indexPath.row].page);
        }
      }
    }
  ]
});

// Render
$("main-list").data = data.map(function(item) {
  return item.name;
});