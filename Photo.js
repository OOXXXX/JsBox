$photo.pick({
    handler: function(resp) {
      var image = resp.image
      if (image) {
        $http.upload({
          url: "https://imgchr.com/ooxxxx",
          form: {
            token: "<token>"
          },
          files: [
            {
              "image": image,
              "name": "file",
              "filename": "file.png"
            }
          ],
          progress: function(percentage) {
  
          },
          handler: function(resp) {
  
          }
        })
      }
    }
  })