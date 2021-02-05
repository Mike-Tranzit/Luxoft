export type CivilizationsList = ReadonlyArray<CivilizationsItem[]>;

export type CivilizationsItem = {
    readonly id: number;
    readonly name: string;
    readonly army_type: string;
    readonly unique_unit: ReadonlyArray<string[]>;
    readonly unique_tech: ReadonlyArray<string[]>;
    readonly team_bonus: string;
    readonly civilization_bonus: ReadonlyArray<string[]>
}
