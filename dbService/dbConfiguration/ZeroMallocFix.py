# FIX FOR MEM LOCATION ERROR:
import ctypes
import sys
_incref = ctypes.pythonapi.Py_IncRef
_incref.argtypes = [ctypes.py_object]
_incref_restype = None


def increase_ref():
    for _ in range(5250):
        _incref(None)


def validate_memory_location():
    # FIX FOR MEM LOCATION ERROR:
    if sys.getrefcount(None) < 24000:
        increase_ref()