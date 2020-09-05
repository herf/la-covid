$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "246,407",
				            "death": "5,977" ,
				            "dailycount": "1,493",
				            "dailydeath": "47" ,
				            "date":"09/04" ,
				            "info":"through 8:00pm 09/03/2020" ,
				            
							"testingaverage":"12,412" ,
							"peopletested":"2,347,357" ,
							"positivity":"4.6%" ,
							"hospitalizations":"992" , 
							                
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



