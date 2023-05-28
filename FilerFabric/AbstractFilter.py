from abc import ABC, abstractmethod
from typing import List

class AbstractFilter(ABC):

    def __init__(self, filter_params):
        self.filter_params = filter_params

    def filter(self, input_id_list):
        if self.empty_list_handle(input_id_list):
            return []
        else:
            return self._filter(input_id_list=input_id_list, params=self.filter_params)

    @abstractmethod
    def _filter(self, input_id_list: list, **params) -> list:
        pass

    def empty_list_handle(self, input_id_list):
        if len(input_id_list) == 0:
            return True
        else:
            return False


class TestFilter(AbstractFilter):
    def _filter(self, input_id_list: list, **params) -> list:



def ApplyFilters(filtered_array: List[int], filters: List[AbstractFilter]):
    _tmp_array = filtered_array.copy()
    for filter in filters:
        _tmp_array = filter.filter(_tmp_array)

    return _tmp_array

print(
    ApplyFilters([0, 1, 0],
    [
        TestFilter({"value_strong_bigger": 0})
    ])
)