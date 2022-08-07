"""empty message

Revision ID: e20a12090440
Revises: 6946c92b2ffd
Create Date: 2022-08-07 01:12:26.016519

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e20a12090440'
down_revision = '6946c92b2ffd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('image', sa.String(length=250), nullable=True))
    op.add_column('product', sa.Column('is_active', sa.Boolean(), nullable=True))
    op.add_column('product', sa.Column('price', sa.Float(), nullable=True))
    op.add_column('product', sa.Column('stock', sa.Integer(), nullable=True))
    op.alter_column('product', 'description',
               existing_type=sa.VARCHAR(length=300),
               type_=sa.String(length=250),
               nullable=True)
    op.drop_column('product', 'photo_1')
    op.drop_column('product', 'photo_2')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('photo_2', sa.VARCHAR(length=300), autoincrement=False, nullable=False))
    op.add_column('product', sa.Column('photo_1', sa.VARCHAR(length=300), autoincrement=False, nullable=False))
    op.alter_column('product', 'description',
               existing_type=sa.String(length=250),
               type_=sa.VARCHAR(length=300),
               nullable=False)
    op.drop_column('product', 'stock')
    op.drop_column('product', 'price')
    op.drop_column('product', 'is_active')
    op.drop_column('product', 'image')
    # ### end Alembic commands ###
