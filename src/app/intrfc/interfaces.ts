export interface Easter {
  /**
   *  Переменная - которая инициализируется в зависимости от того, был Новый год или нет в текущем Богослужебном году.
   */
  keyYear: number; // Главный ключ

  /**
   * Тукущая дата для вычисления других дат
   */
  timeBox: Date;

  /**
   * Пасха текущего года. Имеется в виду Богослужебный год и его прошедшая Пасха.
   */
  paskhaCurrentYear: Date;

  /**
   * Текущий гражданский год в текущем Богослужебном году. Один Богослужебный год имеет всегда в себе два гражданских года. Говоря иначе делится на два периода до Нового года и после. 
   */
  currentYear: any;

  /** 008.
   * Вычисление седмиц и дат зависит от текущего гражданского календаря. В одном гражданском году всегда требуется вычислять даты двух Пасх прошлой и будущей. В зависимости от текущего года проводятся разные вычисления.
   */
  keyNewYearKey: string;

  /**
   * Пасхалия как объект 
   */
  // PASKHALIA: any;

  /**
   * Пасхалия  из файла json
   */
  paskhaliaJSON: object;
  /**
   * Содержит две даты Пасх, текущей и следующей Пасхи (last and next)
   */
  datesEasterYear: any;

  /** 006.
  * Вычисление разницы между датами,
  * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
  */
  dateDeference: number;

}
