export interface Easter {
    keyYear: number; // Главный ключ
    timeBox: Date;
    // lastEaster: string;
    // nextEaster: string;
    paskhaCurrentYear: Date;
    currentYear: any;
    keyNewYearKey: string;
    paskhalia: [];
    paskhalia2: object;
    datesEasterYear: any;
  
    /**
   * Вычисление разницы времен, 
   * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
   * 
   * читай README
  */
    dateDeference: number;
    
}
