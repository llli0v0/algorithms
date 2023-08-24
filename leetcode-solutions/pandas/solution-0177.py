import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    df = employee[['salary']].drop_duplicates()
    if len(df) < N:
        return pd.DataFrame({'getNthHighestSalary(2)': [None]})
    return df.sort_values('salary', ascending=False).head(N).tail(1)
