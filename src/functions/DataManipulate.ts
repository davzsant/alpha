/**
 *  Dias da semana em portugues
 */
enum EDaysOfWeek {
   "Terca-feira",
   "Quarta-feira",
   "Quinta-feira",
   "Sexta-feira",
   "Sabado",
   "Domingo",
   "Segunda-feira"
}

/**
 * Dias da semana em ingles
 */
enum EDaysOfWeekENG {
    Tuesday,     
    Wednesday,   
    Thursday,    
    Friday,      
    Saturday,    
    Sunday,
    Monday,  
}

/**
 * Meses do ano em Portugues
 */
enum EMonths {
    Janeiro = 1,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
 }

 /**
  * Meses do ano em ingles
  */
 enum EMonthsENG {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

/**
 * Codigos de erros na manipulção das datas
 */
enum DateErrorType{
    WrongFormatedString,
    InvalidDate
}

/**
 * Classe para lidar com erros durante as operacoes de datas
 */
class DateError extends Error{
    name:string
    errorCode:DateErrorType
    constructor(errorCode:DateErrorType | number){
        super()
        this.name = "Erro na manipulação de datas"
        this.errorCode = errorCode
        this.getTemporarySolution()
        
    }
    /**
     * Define a causa e o nome do erro
     */
    getTemporarySolution():void{
        switch(this.errorCode as number){
            case 0:
                this.cause = "Enviou uma string formatada incorretamente, precisa ser do tipo dd/mm/aaaa"
                this.name = "StringNotFormated" 
            case 1:
                this.cause = "A string nao estava de acordo com alguma data valida"
                this.name = "InvalidStringdate" 
            default:
                this.name = "Erro na manipulação de datas"
        }
    }
}

/**
 * Interface que define o que um objeto devera conter para trabalhar com base nos dias
 */
export interface IDayEvents{
    dayStr: string;
    dayObj: Date;
    dayId: number;
    dayNumber:number;
    weekdayNumber: number;
    weekdayStr:string;
    monthNumber: number;
    monthStr:string;
    year:number;
    fullYear:number;
    events?:
    [
        {
            eventId:number,
            text:string;
            category:string;
            time?:string;
            info?:String;
        }
    ]
}

type language = "pt" | "eng"

/** 
 * @param daysNumber - O numero de dias que quer obter
 * @returns Retorna uma lista com objetos Date da quantia de dias informado
*/
function getNextDays(daysNumber:number): Date[] {
    const days: Date[] = [];
    const today = new Date();

    for (let i = 0; i < daysNumber; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        days.push(nextDay);
    }
    return days;
}

/** 
 * Obtem um "dayID" do tipo number de um objeto Date, que baseado na quantidade de dias desde 01/01/1970
 */
function getIdforDay(date: Date): number {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const timestamp = date.getTime();
    return Math.floor(timestamp / millisecondsInADay);
}

/**
 * @returns Retorna o nome por extenso de um dia da semana, de acordo com a linguagem selecionada
 */
function getWeekString(weekNumber:number,language:language = 'pt'):string{
    if(language == "pt"){
        return EDaysOfWeek[weekNumber]
    }
    if(language == "eng"){
        return EDaysOfWeekENG[weekNumber]
    }
    return "Nenhum dia definido"
}

/**
 * @returns Retorna o nome por extenso de um mes do ano, de acordo com a linguagem selecionada
 */
function getMonthString(monthNumber:number,language:language = "pt"):string{
    if(language == "pt"){
        return EMonths[monthNumber]
    }
    if(language == "eng"){
        return EMonthsENG[monthNumber]
    }
    return "Nenhum mes definido"
}


/**
 * Formata um objeto Date para o tipo string no seguinte formato: dd/mm/aaaa
 */
function formatDateToString(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Converte o "dayID" para um Objeto Date
 */
function convertToDate(dayId: number): Date {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    return new Date(dayId * millisecondsInADay);
}

/**
 * Passa do formato dd/mm/aaaa em objeto Date
 * @param dateString Precisa ser no formato (dd/mm/aaaa), senão retorna um DateError
 * @property DateError.name DateError.cause
 */
function parseStringToDate(dateString: string): Date | Error {
    if(dateString.includes("/")){
        return new DateError(DateErrorType.WrongFormatedString)
    }
    const [day, month, year] = dateString.split('/').map(Number);
    if(day > 31 || month < 31 || year < 4000){
        return new DateError(DateErrorType.InvalidDate)
    }
    return new Date(year, month - 1, day);
}

/**
  * @param record Objeto com o enumerator do mes e as objetos Date dele
  * @returns retorna apenas arrays que possuem datas
  */
function getValidMonths(record:Record<EMonths,Date[]>) {
    const validMonths = Object.fromEntries(
        Object.entries(record)
          .filter(([key, value]) => {
           
            return value !== undefined && value !== null && value.length > 0;
          })
          .map(([key, value]) => [Number(key) as EMonths, value])
      );
    return validMonths
}

/**
 * 
 * @param dates Um array de objets Dates para serem divididos pelos meses do ano
 * @returns Um Objeto com o numero do mes e um array com dates
 */
function splitDatesByMonth(dates: Date[]) {
    const groupedDates: Record<EMonths, Date[]> = {
        [EMonths.Janeiro]: [],
        [EMonths.Fevereiro]: [],
        [EMonths.Março]: [],
        [EMonths.Abril]: [],
        [EMonths.Maio]: [],
        [EMonths.Junho]: [],
        [EMonths.Julho]: [],
        [EMonths.Agosto]: [],
        [EMonths.Setembro]: [],
        [EMonths.Outubro]: [],
        [EMonths.Novembro]: [],
        [EMonths.Dezembro]: []
    };

    // Agrupa as datas por mês
    dates.forEach(date => {
        const month = date.getMonth() + 1; // getMonth() retorna 0 para Janeiro, 1 para Fevereiro, etc.
        if (month in groupedDates) {
            groupedDates[month as EMonths].push(date);
        }
    });
    const validatedMonths = getValidMonths(groupedDates)
    return validatedMonths
}

/**
 * Funcao que faz a busca e a conversao de todas as informações necessarias de object date
 */
function getInfoByDay(day:Date,language:language = "pt"):IDayEvents{
    return {
        dayId: getIdforDay(day),
        dayStr: formatDateToString(day),
        dayNumber : day.getDate(),
        dayObj: day,
        weekdayNumber: day.getDay(),
        weekdayStr: getWeekString(day.getDay(),language),
        monthNumber: day.getMonth() + 1,
        monthStr: getMonthString(day.getMonth()+1,language),
        year: Number(day.getFullYear().toString().slice(-2)),
        fullYear: day.getFullYear()
    }
}

/**
* Com base nos numero de dias requisitados ira retorna um objeto com uma string do mes e um array de Dates
*/
function getAllDays(numberOfDays:number):Record<string,Date[]>{
    const allDays = getNextDays(numberOfDays)
    const validatedMonths = splitDatesByMonth(allDays)
    return validatedMonths
}

/**
 * Obtem um array de objetos Date dos proximos `n` dias, separados em um objeto com chave string por mes
 */
function getAllNextDaysMonthDivided(daysToGet:number):Record<string,Date[]>{
    const allNextDays = getNextDays(daysToGet)
    const separatedDaysByMonth = splitDatesByMonth(allNextDays)
    return separatedDaysByMonth
}

/**
 * Obtem um array de objetos que contem todas as informacoes necessarias do dia dos proximos `n` dias, separados em um objeto com chave string por mes
 */
function getAllNextDaysAndInfo(daysToGet:number,language:language = "pt"):Record<string,IDayEvents[]>{
    const nextDays = getAllNextDaysMonthDivided(daysToGet)
    const allNextDays:Record<string,IDayEvents[]> = {}
    Object.values(nextDays).map((month)=>{
        const allDays:IDayEvents[] = []
        month.map((day)=>{
            const convertedDay = getInfoByDay(day,language)
            allDays.push(convertedDay)
        })
        allNextDays[getMonthString(month[0].getMonth()+1)] = allDays
    })
    return allNextDays
}

/**
 * Diversas funcoes para manipulação personalizada de objetos Date()
 */
const DataFunctions = {
    getNextDays,
    getIdforDay,
    getWeekString,
    getMonthString,
    getAllDays,
    getAllNextDaysMonthDivided,
    getAllNextDaysAndInfo,
    parseStringToDate,
    convertToDate,
    enums:{
        EDaysOfWeek,
        EDaysOfWeekENG,
        EMonths,
        EMonthsENG
    }

}

export default DataFunctions