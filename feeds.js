$( document ).ready(function() {

    var myToken = 'EAACEdEose0cBAPkernZCfgpLcZCfjBqrdSYN6dbv9l0lIZC9p6o2O3K3qvA19ZBdKOiIMGB2Lcudwps3TmO8bzeej4Yb69afkFShTMF79W0CUeuLdS7DdyxJaqVyvW6sfBnTwKSO9iQxrWJivxnld7hZBc0lvTnb8xtxQekxBpZBsl5Sr1YLvV';
    var userId="10205761814941734";
    $('.loader').hide();
    function getFeedInfo(){

        $.ajax('https://graph.facebook.com/'+userId+'/feed?access_token='+myToken,{

                success : function(response){
                  
                    console.log(response);
                     var trHTML = '';
                
                     $.each(response.data, function (i, item) {
                        if(item.message!=undefined && item.message!=null)
                     trHTML += '<tr><td>' + item.story + '</td><td>'+item.message+'</td><td>' + item.created_time + '</td></tr>';
                        else
                     trHTML += '<tr><td>' + item.story + '</td><td>Not Provided</td><td>' + item.created_time + '</td></tr>';       
                     });
        
                    $('#feed').append(trHTML);

                },
        
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },
                

                 beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }



        );


    } //End of Api call

   getFeedInfo();

  });