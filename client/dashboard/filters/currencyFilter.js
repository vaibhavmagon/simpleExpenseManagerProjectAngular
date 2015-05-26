taskApp.filter('currencyFilter', function() {
    return function(input, currencyVal,selectVal) {
        var out = "";
        var sign = "";
        switch(currencyVal) {
            case 'euro':
                sign = "£";
                out = input;
                break;

            case 'dollar':
                sign = "$";
                out = input;
                break;

            case 'rupee':
                sign = "R";
                out = input;
                break;

            default:
                out = input;
        }
        if(selectVal){
            if(selectVal == 'rupee' && currencyVal == 'euro'){
                return 'R ' + Math.round(out * 70);
            }else if(selectVal == 'euro' && currencyVal == 'rupee'){
                return '£ ' + Math.round(out / 70);
            }else if(selectVal == 'rupee' && currencyVal == 'dollar'){
                return 'R ' + Math.round(out * 64);
            }else if(selectVal == 'dollar' && currencyVal == 'rupee'){
                return '$ ' + Math.round(out / 64);
            }else if(selectVal == 'dollar' && currencyVal == 'euro'){
                return '$ ' + Math.round(out * 0.92);
            }else if(selectVal == 'euro' && currencyVal == 'dollar'){
                return '£ ' + Math.round(out * 1.09);
            }else{
                return sign + ' ' + out;
            }
        }else {
            return sign + ' ' + out;
        }
    }
});