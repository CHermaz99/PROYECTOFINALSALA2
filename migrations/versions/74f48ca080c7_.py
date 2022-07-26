"""empty message

Revision ID: 74f48ca080c7
Revises: 6b4c50c71d3d
Create Date: 2022-07-26 19:18:43.812940

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '74f48ca080c7'
down_revision = '6b4c50c71d3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('unit', sa.Integer(), nullable=True),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('discount', sa.Boolean(), nullable=False),
    sa.Column('total_price', sa.Integer(), nullable=True),
    sa.Column('status_delivery', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id', 'user_id'),
    sa.UniqueConstraint('status_delivery')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('photo_1', sa.String(length=300), nullable=False),
    sa.Column('photo_2', sa.String(length=300), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.add_column('user', sa.Column('address', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('name', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('phone_number', sa.Integer(), nullable=True))
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.drop_column('user', 'phone_number')
    op.drop_column('user', 'name')
    op.drop_column('user', 'address')
    op.drop_table('product')
    op.drop_table('order')
    op.drop_table('items')
    op.drop_table('category')
    # ### end Alembic commands ###
