export interface GroupDiscount {
    _id: string;
university: string;
endDate: Date;
discountRules: [{
    numberOfUsers: number,
    discountPercent: number
}];
users: Array<number>;
userMeta: Array<any>;
}
