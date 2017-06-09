$( document ).ready(function() {

    var myToken = 'EAACEdEose0cBAPkernZCfgpLcZCfjBqrdSYN6dbv9l0lIZC9p6o2O3K3qvA19ZBdKOiIMGB2Lcudwps3TmO8bzeej4Yb69afkFShTMF79W0CUeuLdS7DdyxJaqVyvW6sfBnTwKSO9iQxrWJivxnld7hZBc0lvTnb8xtxQekxBpZBsl5Sr1YLvV';
    $('.loader').hide();
    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myToken,{

                success : function(response){
                    
                    $("#name").text(response.name);
                    $("#myprofile").html('<a target="blank" href='+ response.link+' >Link </a>')
                    $("#gender").text(response.gender);
                    $("#dob").text(response.birthday);

                },
        
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },
                timeout:500,

                 beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }



        );


    } //End of Api call

   getFacebookInfo();

  });