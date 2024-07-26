function myapp(){
    let w ;
    let s = document.getElementById('nn').value
    switch(s){
        case "apple":
            w="12"
            s='30000'
            i= 12*30000
            break
         
            case "lenova":
                w="10"
                s='80000'
                i= 10*80000
                break

                case "hp":
                    w="8"
                    s='65000'
                    i= 8*65000
                    break

                    case "dell":
                        w="7"
                        s='95000'
                        i= 7*95000
                        break

                        case "microsoft":
                            w="15"
                            s='85000'
                            i= 15*85000
                            
                            
                            case "msi":
                                w="16"
                                s='95000'
                                i= 16*95000
                                break
        
}
        document.getElementById('q').value=w
        document.getElementById('pp').value=s
        document.getElementById('total').value=i
    
    
    }

    var f= prompt('whats your name')
    var s =prompt('whats your father name')
    if(f==='faiza'&&s==='yousuf'){
        alert('ok done')
    }