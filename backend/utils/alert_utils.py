# alert_utils.py
# Helper functions for alert generation

def format_alert(token_name, wallet_count):
    """
    Formats the alert message when convergence is detected.

    Args:
        token_name (str): Name of the token.
        wallet_count (int): Number of wallets buying the token.

    Returns:
        str: Formatted alert message.
    """
    return f"🚨 {wallet_count} top wallets bought {token_name} recently!"
