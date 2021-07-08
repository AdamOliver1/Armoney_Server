
class suggestion_service {
    constructor() {

        this.mashkarCard = 'https://www.mashkar.co.il/%D7%9B%D7%A8%D7%98%D7%99%D7%A1%D7%99%D7%9D-%D7%A0%D7%98%D7%A2%D7%A0%D7%99%D7%9D';
        this.InvestmentsTools = {
           'קופת גמל': "https://campaign-1.as-invest.co.il/gemel/?src=google&utm_source=google&utm_medium=cpc&utm_campaign=klg_altshuler_shaham_gemel_gemel-invest_generic_search_t4323&utm_term=%2B%D7%92%D7%9E%D7%9C%20%2B%D7%9C%D7%94%D7%A9%D7%A7%D7%A2%D7%94&gclid=EAIaIQobChMI2_jc2IXU8QIVCyIYCh3zlAqIEAAYASAAEgIGS_D_BwE",
           'בתי השקעות': 'https://www.duns100.co.il/rating/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D_%D7%A4%D7%99%D7%A0%D7%A0%D7%A1%D7%99%D7%99%D7%9D/%D7%91%D7%AA%D7%99_%D7%94%D7%A9%D7%A7%D7%A2%D7%95%D7%AA'
        }
    }



    getMashkarCard ()  {
        return this.mashkarCard;
    }
    getInvestingShortTerm () {
        return this.LessonsInvestingShortTerm;
    }

}

module.exports = new suggestion_service;
