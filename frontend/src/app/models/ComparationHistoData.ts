import { HistogramData } from './HistogramData';
import { ProvaData } from './ProvaData';

export class ComparationHistoData{
    seriesname: string;
    //data: HistogramData[];
    data: ProvaData[];

    constructor(seriesname: string, data: ProvaData[]){
        this.seriesname = seriesname;
        this.data = data;
    }
}