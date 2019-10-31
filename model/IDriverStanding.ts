interface IConstructor{
    constructorId: string;
    name: string;
    nationality: string;
    url: string;
}

interface IDriver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  }
  
interface IDriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: IDriver;
    Constructors: IConstructor[];
}