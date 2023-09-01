import pandas as pd

def market_analysis(users: pd.DataFrame, orders: pd.DataFrame, items: pd.DataFrame) -> pd.DataFrame:
    df = orders[orders.order_date.dt.year == 2019].groupby('buyer_id')['buyer_id'].count().reset_index(name='orders_in_2019')
    return users.merge(df, left_on='user_id', right_on='buyer_id', how='left').fillna(0).drop(columns=['buyer_id']).rename(columns={'user_id': 'buyer_id'})[['buyer_id', 'join_date', 'orders_in_2019']]
