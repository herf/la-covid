$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "255,049",
				            "death": "6,273" ,
				            "dailycount": "474",
				            "dailydeath": "47" ,
				            "date":"09/15" ,
				            "info":"through 8:00pm 09/14/2020" ,
				            
							"testingaverage":"9,773" ,
							"peopletested":"2,465,107" ,
							"positivity":"3.4%" ,
							"hospitalizations":"772" , 
							                
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



