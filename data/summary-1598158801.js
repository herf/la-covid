$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "230,662",
				            "death": "5,537" ,
				            "dailycount": "1,644",
				            "dailydeath": "48" ,
				            "date":"08/22" ,
				            "info":"through 8:00pm 08/21/2020" ,
				            
							"testingaverage":"16,312" ,
							"peopletested":"2,168,595" ,
							"positivity":"5.8%" ,
							"hospitalizations":"1,280" ,                    
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



