import pandas as pd

def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    df = sales.groupby('product_id')[['year']].min().reset_index()
    df = pd.merge(df, sales, on=['product_id', 'year'])
    return df[['product_id', 'year', 'quantity', 'price']].rename(columns={'year': 'first_year'})
