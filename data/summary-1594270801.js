$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "123,004",
				            "death": "3,642" ,
				            "dailycount": "2,496",
				            "dailydeath": "65" ,
				            "date":"07/08" ,
				            "info":"through 8:00pm 07/07/2020" ,
				            
							"testingaverage":"17,298" ,
							"peopletested":"1,229,072" ,
							"positivity":"10.10%" ,
							"hospitalizations":"2,004" ,                    
				        }       
				};
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



