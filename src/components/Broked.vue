























  </body>



<script type="text/javascript">
    // Regular expression from W3C HTML5.2 input specification:
    // https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    new Vue({
      // root node
      el: "#app",
      // the instance state
      data: function () {
        return {
          name: "",
          email: "",
          subject: "",
          message: "",
          isSubmitted: false
        };
      },
      methods: {
        // submit form handler
        submit: function (e) {

          e.preventDefault();
          // this.name, this.email, this.subject, this.message 
          var body = JSON.stringify({ name: this.name, email: this.email, message: this.message });

          this.isSubmitted = true;

          $.ajax({
            type: "POST",
            url: 'https://0sdtjcuryj.execute-api.us-east-1.amazonaws.com/dev/email/send',
            contentType: 'application/json',
            data: JSON.stringify({
              'name': this.name,
              'email': this.email,
              'subject': this.subject, 
              'content': this.message
            }),
            success: function (res) {
              this.isSubmitted = true;
            },
            error: function () { 
              alert('an error has occurred!');
              this.isSubmitted = false;
            }
          });


        },
        // validate by type and value
        validate: function (type, value) {
          if (type === "email") {
            this.email.valid = this.isEmail(value) ? true : false;
          }

        },
        // check for valid email adress
        isEmail: function (value) {
          return emailRegExp.test(value);
        },
        // check or uncheck all
        checkAll: function (event) {
          this.selection.features = event.target.checked ? this.features : [];
        }
      },
      watch: {
        // watching nested property
        //"email.value": function(value) {
        //  this.validate("email", value);
        //}
      }
    });
  </script>
  

  


      methods: {
        // submit form handler
        submit: function (e) {


        },
        // validate by type and value
        validate: function (type, value) {
          if (type === "email") {
            this.email.valid = this.isEmail(value) ? true : false;
          }

        },
        // check for valid email adress
        isEmail: function (value) {
          return emailRegExp.test(value);
        },
        // check or uncheck all
        checkAll: function (event) {
          this.selection.features = event.target.checked ? this.features : [];
        }
      },
      watch: {
        // watching nested property
        //"email.value": function(value) {
        //  this.validate("email", value);
        //}
      }

