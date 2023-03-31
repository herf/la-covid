$(document).ready(function() {	
	fetch('../json/covid19_location_casecounter.json')
		.then((response) => response.json())
		.then((json) => {
			$('#ctn').html(json.count);
			$('#det').html(json.death);
			$('#dctn').html(json.dailycount);
			$('#ddet').html(json.dailydeath);
			$('#hosp_1').html(json.hospitalizationsever);
			$('#dte').html(json.date);
			$('#dte_1').html(json.date);
			$('#dte_2').html(json.date);
			$('#dte_3').html(json.datehospitalizations);
			$('#cse').html(json.info);	
			
			$('#tstavg').html(json.testingaverage);	
			$('#ppltst').html(json.peopletested);	
			$('#pos').html(json.positivity);	
			$('#hosp').html(json.hospitalizations);

			/** Tables **/
			$('#case_summary').html(json.comms);
			$('#res_settings').html(json.res);
			$('#non_res_settings').html(json.non_res);
			$('#peh_settings').html(json.peh);
			$('#educator_settings').html(json.edu);
			$('#correctional_settings').html(json.corr);

			/** Index Cases and Deaths Reports **/
			$('#caseRpt').html(json.casesReports);
			$('#deathRpt').html(json.deathReports);
		});

		fetch('json/covid19_location_casecounter.json')
		.then((response) => response.json())
		.then((json) => {
			$('#ctn').html(json.count);
			$('#det').html(json.death);
			$('#dctn').html(json.dailycount);
			$('#ddet').html(json.dailydeath);
			$('#hosp_1').html(json.hospitalizationsever);
			$('#dte').html(json.date);
			$('#dte_1').html(json.date);
			$('#dte_2').html(json.date);
			$('#dte_3').html(json.datehospitalizations);
			$('#cse').html(json.info);	
			
			$('#tstavg').html(json.testingaverage);	
			$('#ppltst').html(json.peopletested);	
			$('#pos').html(json.positivity);	
			$('#hosp').html(json.hospitalizations);

			/** Tables **/
			$('#case_summary').html(json.comms);
			$('#res_settings').html(json.res);
			$('#non_res_settings').html(json.non_res);
			$('#peh_settings').html(json.peh);
			$('#educator_settings').html(json.edu);
			$('#correctional_settings').html(json.corr);

			/** Index Cases and Deaths Reports **/
			$('#caseRpt').html(json.casesReports);
			$('#deathRpt').html(json.deathReports);
		});
});