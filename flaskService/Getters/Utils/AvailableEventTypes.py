from enum import Enum


class AvailableTypes(Enum):
    FOR_BODY = 'для тела',
    FOR_BRAIN = 'для ума',
    FOR_FUN = 'для души',

    @classmethod
    def convert_any_to_enum(cls, input_string: str):
        processed_string = input_string.lower()
        if processed_string == 'для тела':
            return cls.FOR_BODY
        elif processed_string == 'для ума':
            return cls.FOR_BRAIN
        elif processed_string == 'для души':
            return cls.FOR_FUN

    def __str__(self):
        return str(self.value[0])

if __name__ == '__main__':
    print(AvailableTypes.convert_any_to_enum('Для тела'))