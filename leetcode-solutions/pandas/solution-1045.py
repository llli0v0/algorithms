import pandas as pd

def find_customers(customer: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    df = customer.groupby('customer_id')['product_key'].nunique().reset_index()
    return df[df['product_key'] == product['product_key'].count()][['customer_id']]
