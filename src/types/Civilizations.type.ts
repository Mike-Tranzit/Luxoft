export type CivilizationsList = CivilizationsItem[];

export type CivilizationsItem = {
    readonly id: number;
    readonly name: string;
    readonly expansion: string;
    readonly army_type: string;
    readonly unique_unit: string[];
    readonly unique_tech: string[];
    readonly team_bonus: string;
    readonly civilization_bonus: string[]
}
