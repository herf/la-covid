$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "193,788",
				            "death": "4,701" ,
				            "dailycount": "1,634",
				            "dailydeath": "12" ,
				            "date":"08/03" ,
				            "info":"through 8:00pm 08/02/2020" ,
				            
							"testingaverage":"16,815" ,
							"peopletested":"1,804,698" ,
							"positivity":"8.8%" ,
							"hospitalizations":"1,784" ,                    
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



