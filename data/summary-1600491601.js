$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "258,516",
				            "death": "6,330" ,
				            "dailycount": "1,281",
				            "dailydeath": "22" ,
				            "date":"09/18" ,
				            "info":"through 8:00pm 09/17/2020" ,
				            
							"testingaverage":"10,105" ,
							"peopletested":"2,512,110" ,
							"positivity":"3%" ,
							"hospitalizations":"739" , 
							                
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



