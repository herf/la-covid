$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "224,031",
				            "death": "5,335" ,
				            "dailycount": "1,003",
				            "dailydeath": "64" ,
				            "date":"08/18" ,
				            "info":"through 8:00pm 08/17/2020" ,
				            
							"testingaverage":"17,441" ,
							"peopletested":"2,103,584" ,
							"positivity":"5.9%" ,
							"hospitalizations":"1,352" ,                    
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



