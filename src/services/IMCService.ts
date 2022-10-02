class IMCService {

    calculateService(height: number, weight: number) : number
    {
        let imc = weight / (height * height);
        return imc;
    }

}

export default IMCService;

