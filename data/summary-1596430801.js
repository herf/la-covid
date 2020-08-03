$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "192,167",
				            "death": "4,692" ,
				            "dailycount": "1476",
				            "dailydeath": "23" ,
				            "date":"08/02" ,
				            "info":"through 8:00pm 08/01/2020" ,
				            
							"testingaverage":"16,481" ,
							"peopletested":"1,790,586" ,
							"positivity":"8.9%" ,
							"hospitalizations":"1,856 " ,                    
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



